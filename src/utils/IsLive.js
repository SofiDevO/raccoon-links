import userData from "@data/user.json";
const getUserName = userData.twitch.split("/")[3];

export const isLive = async () => {
    const isLive = await fetch(`https://www.twitch.tv/${getUserName}`);
    const text = await isLive.text();
    const isLiveBroadcast = text.includes("isLiveBroadcast");
    const isActive = isLiveBroadcast ? "active" : "";
    return {
        isActive,
        isLiveBroadcast
    };
}
