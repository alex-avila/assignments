var slck = {
    name: 'slck',
    age: 0,
    services: [
        {
            service: 'messaging',
            devsAssigned: [
                {
                    name: 'Fred',
                    title: 'Lead UX Designer',
                    hobbies: ['Playing piano', 'Photographing'],
                    salary: 57,
                    raiseSalary: function(multiple) {
                        this.salary *= (1 + multiple);
                    }
                },
                {
                    name: 'Julia',
                    title: 'Full-Stack Developer',
                    hobbie: ['Playing ping pong', 'Designing UIs'],
                    salary: 67,
                    raiseSalary: function(multiple) {
                        this.salary *= (1 + multiple);
                    }
                }
            ]
        },
        {
            service: 'money transfers',
            devsAssigned: [
                {
                    name: 'Alex',
                    title: 'Visual Designer',
                    hobbies: ['Reading', 'Walking'],
                    salary: 57,
                    education: [
                        {
                            school: 'University of Shanghai',
                            GPA: 3.21
                        }
                    ],
                    raiseSalary: function(multiple) {
                        this.salary *= (1 + multiple);
                    }
                },
                {
                    name: 'Danny',
                    title: 'Back-End Programmer',
                    hobbies: ['Reading', 'Walking'],
                    salary: 57,
                    education: [
                        {
                            school: 'University of Beijing',
                            GPA: 4.6
                        },
                        {
                            school: 'University of Thailand',
                            GPA: 2
                        }
                    ],
                    raiseSalary: function(multiple) {
                        this.salary *= (1 + multiple);
                    }
                }
            ]
        }
    ] 
};

var oldSalary = slck.services[1].devsAssigned[1].salary;
slck.services[1].devsAssigned[1].raiseSalary(.25);
console.log("Congratulations " + slck.services[1].devsAssigned[1].name +
            ' from ' + slck.services[1].devsAssigned[1].education[0].school +
            '.\nYour salary just increased to ' + slck.services[1].devsAssigned[1].salary +
            ' from ' + oldSalary + '.');












