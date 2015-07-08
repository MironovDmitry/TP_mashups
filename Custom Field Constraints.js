tau.mashups
    .addModule('CFConstraints.config', function () {
        return [{
            processId: 14, //надо поставить 14 = 1C Kanban
            constraints: {
                'userstory': {
                    'entityStates': [
                        {
                            name: 'Planned',
                            requiredCustomFields: ['Требует UAT']
                        }
                    ],
                    'customFields': [
                        {
                            name: 'Требует UAT',
                            valueIn: ['Требует UAT'],
                            requiredCustomFields: ['Требует UAT']
                        }
                    ]
                },
                'bug': {
                    'entityStates': [
                        {
                            name: 'Planned',
                            requiredCustomFields: ['Требует UAT']
                        }
                    ],
                    'customFields': [
                        {
                            name: 'Требует UAT',
                            valueIn: ['Требует UAT'],
                            requiredCustomFields: ['Требует UAT']
                        }
                    ]
                }
            }
        },
        {
            processId: 15, //надо поставить 15 = 1C IAM Kanban
            constraints: {
                'userstory': {
                    'entityStates': [
                        {
                            name: 'Planned',
                            requiredCustomFields: ['Требует UAT']
                        }
                    ],
                    'customFields': [
                        {
                            name: 'Требует UAT',
                            valueIn: ['Требует UAT'],
                            requiredCustomFields: ['Требует UAT']
                        }
                    ]
                },
                'bug': {
                    'entityStates': [
                        {
                            name: 'Planned',
                            requiredCustomFields: ['Требует UAT']
                        }
                    ],
                    'customFields': [
                        {
                            name: 'Требует UAT',
                            valueIn: ['Требует UAT'],
                            requiredCustomFields: ['Требует UAT']
                        }
                    ]
                }
            }
        }];
    });