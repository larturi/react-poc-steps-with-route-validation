import Page404 from "./pages/404";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

export const STEPS = [
    { id: 1, slug: '/', component: Page1 },
    { id: 2, slug: '/config', component: Page2 },
    { id: 3, slug: '/game', component: Page3 },
    { id: 4, slug: '/end', component: Page4 },
    { id: 3, slug: '*', component: Page404 },
];