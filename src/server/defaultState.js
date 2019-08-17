export const defaultState = {
    users: [
        {id: 'U1', name: 'Dev'}
    ],
    groups: [
        {
            name: 'To Do',
            id: 'G1',
            owner: 'UI'
        }
    ],
    tasks: [
        {
            name: 'To tests',
            id: 'T1',
            group: 'G1',
            isComplete: false
        }
    ],
    comments: [
        {
            owner: 'U1',
            id: 'C1',
            task: 'T1'
        }
    ]
}