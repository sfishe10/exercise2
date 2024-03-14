import "./views/profile-page";
import "./views/restaurants-page";
import "./views/trails-page";
import "./views/beaches-page";
import "./views/scout-page";
import "./views/splash-page";
import "./views/firestone-page";
import "./views/bishop-page";
import "./views/p-page";
import "./views/madonna-page";
import "./views/avila-page";
import "./views/grover-page";
import "./views/pismo-page";
import "./views/home-page";

export default [
	{
		path: "/app/profile/:userid",
		component: "profile-page"
	},
	{
		path: "/app/restaurants",
		component: "restaurants-page"
	},
	{
		path: "/app/restaurants/scout",
		component: "scout-page"
	},
	{
		path: "/app/restaurants/splash",
		component: "splash-page"
	},
	{
		path: "/app/restaurants/firestone",
		component: "firestone-page"
	},
	{
		path: "/app/trails",
		component: "trails-page"
	},
	{
		path: "/app/trails/bishop",
		component: "bishop-page"
	},
	{
		path: "/app/trails/p",
		component: "p-page"
	},
	{
		path: "/app/trails/madonna",
		component: "madonna-page"
	},
	{
		path: "/app/beaches",
		component: "beaches-page"
	},
	{
		path: "/app/beaches/avila",
		component: "avila-page"
	},
	{
		path: "/app/beaches/grover",
		component: "grover-page"
	},
	{
		path: "/app/beaches/pismo",
		component: "pismo-page"
	},
	{
		path: "/app",
		component: "home-page"
	}


];