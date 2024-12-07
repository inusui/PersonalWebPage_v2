export interface IProject {
    name: string;
    url: string;
    img: string;
    description: string;
    icon: string;
    technologies: technology[]
    repository: string
    haveRepository: boolean;
}

interface technology {
    name: string;
    icon: string;
}