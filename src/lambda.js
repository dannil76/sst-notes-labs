export async function handler(event) {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Dude! It's awesome! MrKenth is the shit! ${event.requestContext.time}.`,
  };
}
