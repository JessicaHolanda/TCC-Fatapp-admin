export interface Activity {
    title: string;
    type: string;
    description: string;
    initialDate: Date;
    finalDate: Date;
    obsActivity: string;
    obsResource: string;
    isActive: boolean;
    qrCode: string;
    room: number;
    event: number;
    speaker: number;
}
