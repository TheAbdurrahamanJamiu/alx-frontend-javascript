// Subject.ts

import Subjects from './Teacher';

namespace Subjects {
    export class Subject {
        private teacher: Subjects.Teacher;

        public setTeacher(teacher: Subjects.Teacher): void {
            this.teacher = teacher;
        }

        public getTeacher(): Subjects.Teacher {
            return this.teacher;
        }
    }
}

export default Subjects;
