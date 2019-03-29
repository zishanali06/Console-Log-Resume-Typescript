let name = "Zishan Ali";
name = name.toUpperCase();
console.log("Name: " + name);
console.log("Career: Full Stack Engineer");
console.log("Description: I like Game Of Thrones");
console.log("");
console.log("My Interests:")
let myInterests = ['Football', 'Basketball', 'Games', 'Watching Movies'];
for(i = 0; i < myInterests.length; i++){
    console.log('* '+ myInterests[i]);
};

function displayPosition(companyName, jobTitle, description){
    console.log(jobTitle + " at " + companyName + " - " + description);
}
console.log("");
console.log("My Previous Experience:");
displayPosition("Macrobucks", "Founder", "Ran a freebie script website");
displayPosition("ITA Leads", "Web Developer", "Handled all front end and backend aspects of ITA Leads which was an Incentive Affiliate Network");
displayPosition("FreeMoola", "Founder", "Website where you can earn gift cards for doing surveys and watching videos");
console.log("");
console.log("My Skills:");
function displaySkill(skillName, isCool){
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