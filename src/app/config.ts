export enum Path {
    Dashboard = '/dashboard',
    NotFound = '/not-found',
    Users = '/users',
}

type NavLink = {
    href: Path;
    label: string;
};

export const navLinks: NavLink[] = [
    { href: Path.Dashboard, label: 'Dashboard' },
    { href: Path.Users, label: 'Users' },
];
