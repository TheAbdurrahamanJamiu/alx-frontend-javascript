// task_5/js/main.ts

interface MajorCredits {
    credits: number;  
    brand: "Major";   
}

interface MinorCredits {
    credits: number;  
    brand: "Minor";   
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "Major"
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "Minor"
    };
}

const mathCredits: MajorCredits = { credits: 3, brand: "Major" };
const physicsCredits: MajorCredits = { credits: 4, brand: "Major" };
const totalMajorCredits = sumMajorCredits(mathCredits, physicsCredits);
console.log(`Total Major Credits: ${totalMajorCredits.credits} (${totalMajorCredits.brand})`);

const historyCredits: MinorCredits = { credits: 2, brand: "Minor" };
const artCredits: MinorCredits = { credits: 1, brand: "Minor" };
const totalMinorCredits = sumMinorCredits(historyCredits, artCredits);
console.log(`Total Minor Credits: ${totalMinorCredits.credits} (${totalMinorCredits.brand})`);
