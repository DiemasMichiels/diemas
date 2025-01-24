import NextCors from 'nextjs-cors'
import Sendgrid from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'

const { RECAPTCHA_SECRET, SENDGRID_API_KEY } = process.env

type RequestBody = {
  token?: string
  from?: string
  subject?: string
  title?: string
  preheader?: string
  content?: string
}

interface ReCaptchaResponse {
  success: boolean
  challenge_ts: string
  hostname: string
  'error-codes'?: string[]
}

const verifyReCaptcha = async (token?: string) => {
  if (!token || Object.keys(token).length === 0) {
    throw new Error(
      'ReCaptcha token line not provided. Make sure you have a "token" property in your request',
    )
  }

  const response = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${RECAPTCHA_SECRET}&response=${token}`,
    },
  )

  if (!response.ok) {
    throw new Error(`ReCaptcha verification failed: ${response.statusText}`)
  }

  const data = (await response.json()) as ReCaptchaResponse

  if (!data.success) {
    throw new Error(
      `ReCaptcha validation failed: ${data['error-codes']?.join(', ') || 'Unknown error'}`,
    )
  }
}

const makeMessage = (requestBody: RequestBody) => {
  if (!requestBody.from) {
    throw new Error(
      'Email from line not provided. Make sure you have a "from" property in your request',
    )
  } else if (!requestBody.subject) {
    throw new Error(
      'Email subject line not provided. Make sure you have a "subject" property in your request',
    )
  } else if (!requestBody.title) {
    throw new Error(
      'Email title line not provided. Make sure you have a "title" property in your request',
    )
  } else if (!requestBody.preheader) {
    throw new Error(
      'Email preheader line not provided. Make sure you have a "preheader" property in your request',
    )
  } else if (!requestBody.content) {
    throw new Error(
      'Email content not provided. Make sure you have a "content" property in your request',
    )
  }

  const dynamicTemplateData = {
    subject: requestBody.subject,
    title: requestBody.title,
    preheader: requestBody.preheader,
    content: requestBody.content,
  }

  return [
    {
      to: {
        name: 'Diemas Michiels',
        email: 'info@diemas.dev',
      },
      from: {
        name: 'Website contact',
        email: 'noreply@diemas.dev',
      },
      reply_to: requestBody.from,
      templateId: 'd-3422f6d4f092443dbda49a02be8de347',
      dynamic_template_data: dynamicTemplateData,
    },
  ]
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, {
    methods: ['POST'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  try {
    verifyReCaptcha(req.body.token)

    if (!SENDGRID_API_KEY) {
      throw new Error(
        'ReCaptcha token line not provided. Make sure you have a "token" property in your request',
      )
    }

    Sendgrid.setApiKey(SENDGRID_API_KEY)
    const response = await Sendgrid.send(makeMessage(req.body))

    return (
      res
        // @ts-ignore
        .status(response[0][0].statusCode)
        // @ts-ignore
        .send(response[0][0].body || 'OK')
    )
  } catch (error) {
    console.dir(error, { depth: null })
    return res.status(400).send(error)
  }
}
