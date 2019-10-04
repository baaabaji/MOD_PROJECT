export class User{
id: string;
userName: string;
password: string;
firstName: string;
lastName: string;
contactNumber: string;
email:string;
regCode:string;
role: string;
linkedinUrl: string;
yearsofexperience:string;
active: boolean;
confirmedSignUp:boolean;
resetPassword: boolean;
resetPasswordDate: string;

}

export class Payment{
    id: string;
    amount: string;
    mentorId: string;
    mentorName: string;
    paymentType: string;
    remarks: string;
    skillName: string;
    AmtToMentor: string;
    trainingId: string;
    txnType: string;
    userId:string;
}


export class Training{
    trainingId: String;
    amountRecieved: Number;
    amtToMentor: Number;
    commissionPercent:Number;
    endDate: Date;
    endTime: String;
    fees: Number;
    mentorId: String;
    progress: Number;
    rating: Number;
    razorPay:String;
    skillId:String;
    startDate:Date;
    startTime:String;
    status:Number;
    userId:String;
    techId:String;
    
    }