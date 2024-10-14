/* eslint-disable prettier/prettier */
export const accountSignUp = [
    {
        id: "guardianEmail",
        displayName: "Parent/guardian email address",
        placeHolder: 'Enter email',
        type: 'text',
        required: true,
        validationType: 'email',
        rules: { required: true, minLength: 8, maxLength: 32 }
    },
    {
        id: "learnerUserName",
        displayName: "Learner username",
        placeHolder: 'Create username',
        type: 'text',
        required: true,
        validationType: 'username',
        rules: { required: true, minLength: 8, maxLength: 32 }
    },
    {
        id: "password",
        displayName: "Password",
        placeHolder: 'Create a password',
        type: 'text',
        required: true,
        validationType: 'password',
        rules: { required: true, minLength: 8, maxLength: 32 }
    },
    {
        id: "learnerAge",
        displayName: "Learner age",
        placeHolder: 'Enter learner age',
        type: 'numeric',
        required: true,
        validationType: 'age',
        rules: { required: true }
    },
    {
        id: "learnerInterests",
        displayName: "Learner interests",
        placeHolder: 'Select all that apply',
        type: 'mutliselect',
        required: true,
        validationType: 'morethanOne',
        rules: { required: true },
        items: [
            {
    
                value: "Sensory Play",
                key: "sensoryPlay"

            },
            {
                value: "Numbers & Patterns",
                key: "numbers&patterns"

            },
            {
                value: "Animals & Nature",
                key: "animals&nature"

            },
            {
                value: "Creative Activities",
                key: "creativeActivities"

            },
            {
                value: "Stories & Characters",
                key: "stories&characters"

            }
        ]
    },
];
