export interface ButtonProps {
	content: String | React.ReactNode;
	className?: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
}

export interface ButtonLinkProps {
	path: string;
	content:String;
	className?: String;
}