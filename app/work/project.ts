export interface WorkPhoto {
    src: string;
    location: string;
    width: number;
    height: number;
}

export interface Project {
    slug: string;
    title: string;
    location: string;
    date: string;
    categories: string[];
    cover: string;
    coverWidth: number;
    coverHeight: number;
    photos: WorkPhoto[];
}

export function slugify(title: string): string {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

// A title may contain "\n" to force a line break in the gallery hero.
// Everywhere else (alt text, archive card, slug) we want it on one line.
export function flatTitle(title: string): string {
    return title.replace(/\s*\n\s*/g, " ");
}

// Galleries are grouped by the event/project they belong to, powering a
// Pixieset-style "list of events -> full gallery per event" flow.
// Categories are set per album, not per photo.
const rawProjects: Omit<Project, "slug" | "cover" | "coverWidth" | "coverHeight">[] = [
    {
        title: "Maris Agni",
        location: "Negombo, SL",
        date: "January 09th, 2026",
        categories: ["Festival"],
        photos: [
            { src: "/gallery/maris-agni/1.jpg", location: "Negombo", width: 4000, height: 6000 },
            { src: "/gallery/maris-agni/2.jpg", location: "Negombo", width: 6000, height: 4000 },
            { src: "/gallery/maris-agni/3.jpg", location: "Negombo", width: 4000, height: 6000 },
            { src: "/gallery/maris-agni/4.jpg", location: "Negombo", width: 4000, height: 6000 },
            { src: "/gallery/maris-agni/5.jpg", location: "Negombo", width: 4000, height: 6000 },
            { src: "/gallery/maris-agni/6.jpg", location: "Negombo", width: 4000, height: 6000 },
            { src: "/gallery/maris-agni/7.jpg", location: "Negombo", width: 4000, height: 6000 },
            { src: "/gallery/maris-agni/8.jpg", location: "Negombo", width: 4000, height: 6000 },
        ],
    },
    {
        title: "Green Fiesta",
        location: "NSBM",
        date: "March 06th, 2026",
        categories: ["Festival"],
        photos: [
            { src: "/gallery/green-fiesta/1.jpg", location: "NSBM", width: 6229, height: 4150 },
            { src: "/gallery/green-fiesta/2.jpg", location: "NSBM", width: 4135, height: 6209 },
            { src: "/gallery/green-fiesta/3.jpg", location: "NSBM", width: 6706, height: 4471 },
            { src: "/gallery/green-fiesta/4.jpg", location: "NSBM", width: 4230, height: 6347 },
            { src: "/gallery/green-fiesta/5.jpg", location: "NSBM", width: 4300, height: 6443 },
            { src: "/gallery/green-fiesta/6.jpg", location: "NSBM", width: 5995, height: 3995 },
        ],
    },
    {
        title: "Monde French Bakery Grand Opening",
        location: "Negombo",
        date: "April 19th, 2026",
        categories: ["Corporate"],
        photos: [
            { src: "/gallery/monde-french-bakery-grand-opening/1.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/monde-french-bakery-grand-opening/2.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/monde-french-bakery-grand-opening/3.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/monde-french-bakery-grand-opening/4.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/monde-french-bakery-grand-opening/5.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/monde-french-bakery-grand-opening/6.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/monde-french-bakery-grand-opening/7.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/monde-french-bakery-grand-opening/8.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/monde-french-bakery-grand-opening/9.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/monde-french-bakery-grand-opening/10.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/monde-french-bakery-grand-opening/11.jpg", location: "Colombo", width: 4435, height: 6652 },
        ],
    },
    {
        title: "Her Live in Concert by Umaria",
        location: "Havelock Grounds",
        date: "July 11th, 2026",
        categories: ["Concert"],
        photos: [
            { src: "/gallery/her-live-in-concert-by-umaria/1.jpg", location: "Colombo", width: 6652, height: 4435 },
            { src: "/gallery/her-live-in-concert-by-umaria/2.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/her-live-in-concert-by-umaria/3.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/her-live-in-concert-by-umaria/4.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/her-live-in-concert-by-umaria/5.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/her-live-in-concert-by-umaria/6.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/her-live-in-concert-by-umaria/7.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/her-live-in-concert-by-umaria/8.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/her-live-in-concert-by-umaria/9.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/her-live-in-concert-by-umaria/10.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/her-live-in-concert-by-umaria/11.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/her-live-in-concert-by-umaria/12.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/her-live-in-concert-by-umaria/13.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/her-live-in-concert-by-umaria/14.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/her-live-in-concert-by-umaria/15.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/her-live-in-concert-by-umaria/16.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/her-live-in-concert-by-umaria/17.jpg", location: "Colombo", width: 4435, height: 6652 },
        ],
    },
    {
        title:'Rookantha - A Timeless Music Journey',
        location: "Colombo",
        date: "August 15th, 2026",
        categories: ["Concert"],
        photos: [
            { src: "/gallery/rookantha-a-timeless-music-journey/1.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/rookantha-a-timeless-music-journey/2.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/rookantha-a-timeless-music-journey/3.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/rookantha-a-timeless-music-journey/4.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/rookantha-a-timeless-music-journey/5.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/rookantha-a-timeless-music-journey/6.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/rookantha-a-timeless-music-journey/7.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/rookantha-a-timeless-music-journey/8.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/rookantha-a-timeless-music-journey/9.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/rookantha-a-timeless-music-journey/10.jpg", location: "Colombo", width: 4435, height: 6652 },     
            { src: "/gallery/rookantha-a-timeless-music-journey/11.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/rookantha-a-timeless-music-journey/12.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/rookantha-a-timeless-music-journey/13.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/rookantha-a-timeless-music-journey/14.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/rookantha-a-timeless-music-journey/15.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/rookantha-a-timeless-music-journey/16.jpg", location: "Colombo", width: 4435, height: 6652 },         

        ],
    },
    {
        title: "Sri Lanka Red Cross Society\n National Youth Annual General Assembly 2026",
        location: "Ramada Colombo",
        date: "August 22nd, 2026",
        categories: ["Corporate"],
        photos: [
            { src: "/gallery/sri-lanka-red-cross-society-national-youth-annual-general-assembly-2026/1.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/sri-lanka-red-cross-society-national-youth-annual-general-assembly-2026/2.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/sri-lanka-red-cross-society-national-youth-annual-general-assembly-2026/3.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/sri-lanka-red-cross-society-national-youth-annual-general-assembly-2026/4.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/sri-lanka-red-cross-society-national-youth-annual-general-assembly-2026/5.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/sri-lanka-red-cross-society-national-youth-annual-general-assembly-2026/6.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/sri-lanka-red-cross-society-national-youth-annual-general-assembly-2026/7.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/sri-lanka-red-cross-society-national-youth-annual-general-assembly-2026/8.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/sri-lanka-red-cross-society-national-youth-annual-general-assembly-2026/9.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/sri-lanka-red-cross-society-national-youth-annual-general-assembly-2026/10.jpg", location: "Colombo", width: 4435, height: 6652 },
        ],
    },
    {
        title: "Bonna Hithena Sindu",
        location: "Colombo",
        date: "August 22nd, 2026",
        categories: ["Concert"],
        photos: [
            { src: "/gallery/bonna-hithena-sindu/1.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/bonna-hithena-sindu/2.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/bonna-hithena-sindu/3.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/bonna-hithena-sindu/4.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/bonna-hithena-sindu/5.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/bonna-hithena-sindu/6.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/bonna-hithena-sindu/7.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/bonna-hithena-sindu/8.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/bonna-hithena-sindu/9.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/bonna-hithena-sindu/10.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/bonna-hithena-sindu/11.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/bonna-hithena-sindu/12.jpg", location: "Colombo", width: 4435, height: 6652 },
            { src: "/gallery/bonna-hithena-sindu/13.jpg", location: "Colombo", width: 4435, height: 6652 },
        ],  
    }
];

export const projects: Project[] = rawProjects.map((p) => {
    const cover = p.photos[0];
    return {
        ...p,
        slug: slugify(p.title),
        cover: cover.src,
        coverWidth: cover.width,
        coverHeight: cover.height,
    };
});

export function getProject(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
