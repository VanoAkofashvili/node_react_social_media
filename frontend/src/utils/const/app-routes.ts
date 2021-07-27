interface RouteInterface  {
    path: String,
    view: String,
    private: Boolean,
    exact: Boolean
}

export const appRoutes: RouteInterface[] = [
    {
        path: 'home',
        view: "Home",
        private: true,
        exact: true
    }
]