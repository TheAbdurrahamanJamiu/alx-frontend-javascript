// Java.ts

import Subjects from './Teacher';
import './Subject';
import './Cpp'; // Import Cpp to ensure Teacher interface is extended
import './React'; // Import React to ensure Teacher interface is extended

// Extend the Teacher interface using declaration merging
namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number; // Optional attribute
    }
  
    export class Java extends Subject {
        public getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        public getAvailableTeacher(): string {
            if (this.getTeacher() && this.getTeacher().experienceTeachingJava !== undefined && this.getTeacher().experienceTeachingJava > 0) {
                return `Available Teacher: ${this.getTeacher().firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}

export default Subjects;
