let namestring: string = "Zishan Ali";
namestring = namestring.toUpperCase();
console.log("Name: " + namestring);
console.log("Career: Full Stack Engineer");
console.log("Description: I like Game Of Thrones");
console.log("");
console.log("My Interests:")
let myInterests: string[] = ['Football', 'Basketball', 'Games', 'Watching Movies'];
for(let i: number = 0; i < myInterests.length; i++){
    console.log('* '+ myInterests[i]);
};

function displayPosition(companyName: string, jobTitle: string, description: string){
    console.log(jobTitle + " at " + companyName + " - " + description);
}
console.log("");
console.log("My Previous Experience:");
displayPosition("Macrobucks", "Founder", "Ran a freebie script website");
displayPosition("ITA Leads", "Web Developer", "Handled all front end and backend aspects of ITA Leads which was an Incentive Affiliate Network");
displayPosition("FreeMoola", "Founder", "Website where you can earn gift cards for doing surveys and watching videos");
console.log("");
console.log("My Skills:");
function displaySkill(skillName: string, isCool: boolean){
    if(isCool == true){
        console.log("* BAM: " + skillName);
    } else {
        console.log("* " + skillName);
    }
}

displaySkill("Java", false);
displaySkill("C#", true);
displaySkill("Eating", false);
displaySkill("Python", true);
displaySkill("Ruby", false);