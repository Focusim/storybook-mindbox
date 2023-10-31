import Task from './Task.vue';

import { action } from '@storybook/addon-actions';

export default {
    component: Task,
    title: 'Task',
    tags: ['autodocs'],
    //👇 Our events will be mapped in Storybook UI
    argTypes: {
        onPinTask: {
            'description': 'описание тут',
            'label': '123'
        },
        myTask: {
            'description': 'описание тут'
        },
        onArchiveTask: {
        },
    },
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const actionsData = {
    onPinTask: action('pin-task'),
    onArchiveTask: action('archive-task'),
};

export const Default = {
    args: {
        task: {
            id: '1',
            title: 'Test Task',
            state: 'TASK_INBOX',
        },
    },
};

export const Pinned = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_PINNED',
        },
    },
};

export const Archived = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_ARCHIVED',
        },
    },
};