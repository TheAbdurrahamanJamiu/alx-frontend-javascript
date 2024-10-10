// Cpp.ts

import Subjects from './Teacher';
import './Subject';

// Extend the Teacher interface using declaration merging
namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number; // Optional attribute
    }
    
    export class Cpp extends Subject {
        public getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        public getAvailableTeacher(): string {
            if (this.getTeacher() && this.getTeacher().experienceTeachingC !== undefined && this.getTeacher().experienceTeachingC > 0) {
                return `Available Teacher: ${this.getTeacher().firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}

export default Subjects;
