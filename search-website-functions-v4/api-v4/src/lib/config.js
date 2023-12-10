const CONFIG = {
    SearchIndexName: process.env["SearchIndexName"] || "azureblob-index",
    SearchApiQueryKey: process.env["SearchApiKey"] || "",
    SearchServiceName: process.env["SearchServiceName"] || "",
    SearchFacets: process.env["SearchFacets"] || "", 
}
console.log(CONFIG);
if (!CONFIG.SearchIndexName || !CONFIG.SearchApiQueryKey || !CONFIG.SearchServiceName) throw Error("./config.js::Cognitive Services key is missing");

module.exports = { CONFIG };
