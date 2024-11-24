export interface IProject {
    name: string;
    url: string;
    img: string;
    description: string;
    disable: boolean;
    icon: string;
    buttonText: string;
    technologies: technology[]
}

interface technology {
    name: string;
    icon: string;
}