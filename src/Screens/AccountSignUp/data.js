export const accountSignUp = [
    {id: "guardianEmail", 
    displayName: "Parent/guardian email address", 
    placeHolder: 'Enter email',
    type: 'text', 
    required: true, 
    validationType: 'email'
    },
    {id: "learnerUserName", 
    displayName: "Learner username", 
    placeHolder: 'Create username',
    type: 'text', 
    required: true, 
    validationType: 'name'
    },
    {id: "password", 
    displayName: "Password", 
    placeHolder: 'Create a password',
    type: 'text', 
    required: true, 
    validationType: 'password'
    },
    {id: "learnerAge", 
    displayName: "Learner age", 
    placeHolder: 'Enter learner age',
    type: 'number', 
    required: true, 
    validationType: 'number'
    },
    {id: "learnerInterests", 
    displayName: "Learner interests", 
    placeHolder: 'Select all that apply',
    type: 'mutliselect', 
    required: true, 
    validationType: 'morethanOne',
    items: [
        {id: "sensoryPlay", 
        displayName: "Sensory Play"
        },
        {id: "numbers&patterns", 
        displayName: "Numbers & Patterns"
        },
        {id: "animals&nature", 
        displayName: "Animals & Nature"
        },
        {id: "creativeActivities", 
        displayName: "Creative Activities"
        },
        {id: "stories&characters", 
        displayName: "Stories & Characters"
        }
    ]
    },
];