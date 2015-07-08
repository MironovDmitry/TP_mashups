tau.mashups
    .addModule('CFConstraints.config', function () {
        return [{
            processId: 14, //���� ��������� 14 = 1C Kanban
            constraints: {
                'userstory': {
                    'entityStates': [
                        {
                            name: 'Planned',
                            requiredCustomFields: ['������� UAT']
                        }
                    ],
                    'customFields': [
                        {
                            name: '������� UAT',
                            valueIn: ['������� UAT'],
                            requiredCustomFields: ['������� UAT']
                        }
                    ]
                },
                'bug': {
                    'entityStates': [
                        {
                            name: 'Planned',
                            requiredCustomFields: ['������� UAT']
                        }
                    ],
                    'customFields': [
                        {
                            name: '������� UAT',
                            valueIn: ['������� UAT'],
                            requiredCustomFields: ['������� UAT']
                        }
                    ]
                }
            }
        },
        {
            processId: 15, //���� ��������� 15 = 1C IAM Kanban
            constraints: {
                'userstory': {
                    'entityStates': [
                        {
                            name: 'Planned',
                            requiredCustomFields: ['������� UAT']
                        }
                    ],
                    'customFields': [
                        {
                            name: '������� UAT',
                            valueIn: ['������� UAT'],
                            requiredCustomFields: ['������� UAT']
                        }
                    ]
                },
                'bug': {
                    'entityStates': [
                        {
                            name: 'Planned',
                            requiredCustomFields: ['������� UAT']
                        }
                    ],
                    'customFields': [
                        {
                            name: '������� UAT',
                            valueIn: ['������� UAT'],
                            requiredCustomFields: ['������� UAT']
                        }
                    ]
                }
            }
        }];
    });