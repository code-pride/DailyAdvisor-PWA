export const getOwnProfileSuccess = {
    status: 200,
    statusText: 'OK',
    data: {
        name: 'Marcin',
        lastName: 'Krawczyk',
        city: 'Katowice',
        about: 'Dreamer who loves tee shirts, travelling and meeting new people.',
        favDiscipline: 'Running',
        lvl: 'Amator',
        dateOfBirth: '1991-02-15',
        userId: '1',
        userType: 'client',
        email: 'marckraw@icloud.com',
        profilePictureId: '12345678901234567890',
    },
};

export const getOwnProfileFail = {
    error: {
        message: `Can't fetch user`,
    },
};

export const upgradeToCoachSuccess = {
    status: 200,
    statusText: 'OK',
    data: {},
};

export const upgradeToCoachFail = {
    error: {
        message: `Can't upgrade to coach`,
    },
};
