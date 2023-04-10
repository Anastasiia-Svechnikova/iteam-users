import { createReducer, on } from '@ngrx/store';

import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { mainUserActions } from './actions';

export interface IMainState {
  user: IUserDetails | null;
}

const initialState: IMainState = {
  user: {
    id: 181,
    email: '19@gmail.com',
    password: '$2a$05$TcAYQZ8iKQ3zR34.v5qX6.V7FNrC0KjquHeKd8FMT9wvZDMKytNFG',
    name: 'Kolya',
    surname: 'Jackson',
    positionDescription:
      'I am an experienced (3 years) Front-End developer with preferences for Angular2+, JavaScript, TypeScript, NgRx, RxJS, and other libraries. I have experience making sites - Web applications, building UI with Angular, developing features, bug fixes. I write high-quality code; I use suitable solutions and programming patterns. Looking for long-term project. My timezone is UTC+2',
    language: null,
    endReason: 'won lottery',
    avatarUrl:
      'https://res.cloudinary.com/iteam-cloud/image/upload/v1643381088/Iteam/iteam.logo_lrlwkj.jpg',
    phone: '3004040440',
    city: 'Canberra',
    salary: 10000,
    address: 'private info',
    skills: 'JS TS NODE.JS REACT ANGULAR',
    experience: 'nope',
    isBanned: false,
    banReason: null,
    birthday: '2002-04-05T13:09:36.463Z',
    cvId: null,
    startDate: '2022-04-05T13:09:36.463Z',
    endDate: '2023-04-05T13:09:36.463Z',
    workTypeId: null,
    status: 'unarchived',
    upwork: 'https://www.upwork.com/',
    github: 'https://www.github.com/',
    linkedin: 'https://www.linkedin.com/',
    telegramTag: 'none',
    individualEntrepreneurName: 'Kolya',
    individualEntrepreneurAddress: 'fgdfg',
    individualEntrepreneurIndividualTaxNumber: 435435,
    individualEntrepreneurBankAccounNumber: 'UA8734893287453298',
    individualEntrepreneurBankName: 'AVAL',
    individualEntrepreneurBankCode: 485093485,
    individualEntrepreneurBeneficiaryBank: 'Suisse',
    individualEntrepreneurSwiftCode: 'UA324525345435435435',
    defaultCoverLetter: null,
    createdAt: '2023-04-05T13:37:48.971Z',
    updatedAt: '2023-04-05T13:37:48.971Z',
    cv: null,
    workType: null,
    roles: [
      {
        id: 2,
        value: 'GUEST',
        description: 'some description',
        createdAt: '2023-02-06T15:49:45.897Z',
        updatedAt: '2023-02-06T15:49:45.897Z',
        UserRole: {
          id: 88,
          roleId: 2,
          userId: 181,
        },
      },
    ],
    token: {
      id: 50,
      userId: 181,
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjE5QGdtYWlsLmNvbSIsImlkIjoxODEsInJvbGVzIjpbeyJpZCI6MiwidmFsdWUiOiJHVUVTVCIsImRlc2NyaXB0aW9uIjoic29tZSBkZXNjcmlwdGlvbiIsImNyZWF0ZWRBdCI6IjIwMjMtMDItMDZUMTU6NDk6NDUuODk3WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDItMDZUMTU6NDk6NDUuODk3WiJ9XSwiaWF0IjoxNjgwNzAxODY5LCJleHAiOjE2ODA3ODgyNjl9.bwzHDGjwVtNQWmliK72_8fFctIX3GQrDHVNkXnONsO0',
      createdAt: '2023-04-05T13:37:49.173Z',
      updatedAt: '2023-04-05T13:37:49.173Z',
    },
    leadingInProjects: [],
    participatingInProjects: [],
    attachedAttachments: [],
    publishedAttachments: [],
    techStack: [],
    educationInfo: [
      {
        id: 333,
        startDate: '2013-04-05T13:37:49.173Z',
        endDate: '2018-04-05T13:37:49.173Z',
        universityName: 'Columbia University',
        specialization: 'Designer',
        pricingModel: 'Bachelor of Arts',
      },
    ],
    workHistory: [
      {
        id: 1,
        project: 'New Project',
        user: 'string',
        startDate:
          'Sat Feb 04 2023 14:02:55 GMT+0200 (Eastern European Standard Time)',
        endDate:
          'Sat Feb 04 2023 14:02:55 GMT+0200 (Eastern European Standard Time)',
        positionOnProject: 'Full stack developer',
        responsibility: 'auth integration, database schema designing',
        showCaseAttachments: [null],
      },
      {
        id: 1,
        project: 'New Project',
        user: 'string',
        startDate:
          'Sat Feb 04 2023 14:02:55 GMT+0200 (Eastern European Standard Time)',
        endDate:
          'Sat Feb 04 2023 14:02:55 GMT+0200 (Eastern European Standard Time)',
        positionOnProject: 'Full stack developer',
        responsibility: 'auth integration, database schema designing',
        showCaseAttachments: [null],
      },
    ],
  },
};

export const MainReducer = createReducer(
  initialState,

  on(mainUserActions.loadedCurrentUser, (state, { user }) => ({
    ...state,
    user: user,
  })),
);
