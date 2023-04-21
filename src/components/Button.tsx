import type { ParentComponent } from "solid-js";

type ButtonProps = {
	class?: string;
	onClick?: () => void;
};

export const Button: ParentComponent<ButtonProps> = (props) => {
	return (
		<button class={props.class} onClick={props.onClick}>
			{props.children}
		</button>
	)
}