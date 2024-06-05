/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
// create a variable to hold your NFT's
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
let NFTs=[];
function mintNFT (name, position, department, age) {
    let metadata={
        Name: name,
        Position: position,
        Department: department,
        Age: age
    };
    NFTs.push(metadata);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length;i++){
        console.log("\n\n******************* Employee's Record *******************\n\n");
        console.log("Employee Name: ", NFTs[i].Name);
        console.log("Position: ", NFTs[i].Position);
        console.log("Department: ", NFTs[i].Department);
        console.log("Age: ", NFTs[i].Age);
        console.log("\n\n**********************************\n\n");
    }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFTs minted: ",NFTs.length)
}
// call your functions below this line

mintNFT("Rajesh Kumar", "Software Engineer", "Development", 28);
mintNFT("Anita Desai", "Project Manager", "Operations", 34);
mintNFT("Pooja Singh", "UI/UX Designer", "Design", 26);
mintNFT("Vikram Sharma", "Data Analyst", "Marketing", 30);
mintNFT("Sunita Verma", "HR Specialist", "Human Resources", 29);


listNFTs();
getTotalSupply();