// React.ts

import Subjects from './Teacher';
import './Subject';
import './Cpp'; // Import Cpp to ensure Teacher interface is extended

// Extend the Teacher interface using declaration merging
namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number; // Optional attribute
    }
  
    export class React extends Subject {
        public getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        public getAvailableTeacher(): string {
            if (this.getTeacher() && this.getTeacher().experienceTeachingReact !== undefined && this.getTeacher().experienceTeachingReact > 0) {
                return `Available Teacher: ${this.getTeacher().firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}

export default Subjects;
