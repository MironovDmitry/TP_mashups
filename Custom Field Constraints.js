// JavaScript source code
tau.mashups
    .addModule('CFConstraints.config', function () {
        return [{
            processId: 12, //���� ��������� 14 = 1C Kanban
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
            processId: 12, //���� ��������� 15 = 1C IAM Kanban
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