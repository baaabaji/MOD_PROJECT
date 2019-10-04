  
export class Mentor{

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
    timezone: string;
    rating: string;
    mentorprofile: string;

}


export class Skill{

    id: string;
    name: string;
    prerequisites: string;
    toc: string;
    mentorId: string;


}