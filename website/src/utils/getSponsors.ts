export async function getSponsors() {
  const GET_SPONSORS = `
    {
      user(login: "hiroppy") {
        sponsorshipsAsMaintainer(first: 100) {
          nodes {
            sponsorEntity {
              ... on User {
                avatarUrl
                url
              }
            }
          }
        }
      }
    }
  `.trim();
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query: GET_SPONSORS }),
  }).then((res) => res.json());
  const sponsors = res.data.user.sponsorshipsAsMaintainer.nodes.map(
    ({ sponsorEntity: { avatarUrl, url } }) => {
      return {
        avatarUrl: `${avatarUrl}&s=70`,
        url,
      };
    }
  );

  return sponsors;
}
