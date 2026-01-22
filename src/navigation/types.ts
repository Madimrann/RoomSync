import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
    Splash: undefined;
    Welcome: undefined;
    Login: undefined;
    CreateHouse: undefined;
    JoinHouse: undefined;
    InviteMembers: { houseId: string };
};

export type HomeTabParamList = {
    Home: undefined;
    Chores: undefined;
    Bills: undefined;
    Announcements: undefined;
    More: undefined;
};

export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>;
    App: NavigatorScreenParams<HomeTabParamList>;

    // Global Modals/Stacks
    AddChore: undefined;
    ChoreDetail: { choreId: string };
    AddBill: undefined;
    BillDetail: { billId: string };
    CreateAnnouncement: undefined;
    AnnouncementDetail: { announcementId: string };
    HouseSettings: undefined;
    MemberProfile: { userId: string };
    History: undefined;
};
