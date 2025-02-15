const isLive = await fetch("https://www.twitch.tv/sofidev");
const text = await isLive.text();
const isLiveBroadcast = text.includes("isLiveBroadcast") ? "active" : "";


export { isLiveBroadcast, isLive, text };