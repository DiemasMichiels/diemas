import { getSession } from 'next-auth/react'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function callback(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession({ req })

  if (!session) {
    return res.redirect(307, '/login')
  }

  const token = session.accessToken
  const provider = 'github' // or determine dynamically

  const responseBody = renderBody('success', {
    token,
    provider,
  })

  res.status(200).send(responseBody)
}

function renderBody(
  status: string,
  content: { token: string | undefined; provider: string },
) {
  return `
    <script>
      const receiveMessage = (message) => {
        window.opener.postMessage(
          'authorization:${content.provider}:${status}:${JSON.stringify(content)}',
          message.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:${content.provider}", "*");
    </script>
  `
}
