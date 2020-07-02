import React from 'react';
export const ArrowBackCircleo = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon arrowBackCircle-o';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<circle cx="12" cy="12" r="11.25" stroke-width="1.5" />
			<path d="M5.47 11.47a.75.75 0 000 1.06l4.773 4.773a.75.75 0 001.06-1.06L7.061 12l4.242-4.243a.75.75 0 10-1.06-1.06L5.47 11.47zM18 11.25H6v1.5h12v-1.5z" />
		</svg>
	);
};
export const Createf = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon create-f';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
			<path d="M3.496 17.463v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L18.31 9.944l-3.75-3.752L3.645 17.103c-.1.1-.15.22-.15.36zM21.21 7.042a.996.996 0 000-1.41L18.87 3.29a.998.998 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
		</svg>
	);
};
export const Createo = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon create-o';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
			<path
				stroke-width="1.4"
				d="M6.659 20.802H3.702v-2.967L14.675 6.862l2.967 2.967L6.66 20.802zm14.54-14.529h-.001L19.762 7.71l-2.968-2.968 1.436-1.436h0a.352.352 0 01.498 0h0l2.47 2.47h0a.351.351 0 010 .497z"
			/>
		</svg>
	);
};
export const Dropo = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon drop-o';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
			<mask id="a">
				<path
					fillRule="evenodd"
					d="M12.22 2.222c.048.38.107.743.173 1.092.094.488.204.948.329 1.383.684 2.396 1.79 4.063 2.799 5.584 1.23 1.855 2.315 3.492 2.315 5.965 0 3.18-2.671 5.758-5.834 5.758-3.164 0-5.835-2.578-5.835-5.758 0-2.473 1.086-4.11 2.316-5.965 1.01-1.52 2.115-3.188 2.8-5.584.124-.435.234-.895.328-1.383.066-.349.125-.712.173-1.091l.007-.054c.027-.224.394-.224.423 0l.006.052v.001zm-2.428 8.599c.74-1.12 1.551-2.378 2.21-3.973.659 1.595 1.47 2.854 2.21 3.972l.082.125c1.281 1.936 2.153 3.252 2.153 5.3 0 2.387-2.023 4.37-4.445 4.37-2.423 0-4.446-1.982-4.446-4.37 0-2.048.872-3.364 2.154-5.3l.082-.124zm1.365.134c.059-.208.116-.408.168-.604a.338.338 0 00-.056-.287c-.131-.177-.42-.185-.527-.006-.234.39-.523.783-.83 1.198-.978 1.324-2.084 2.826-2.084 5.126a1.21 1.21 0 001.204 1.214c.582 0 1.205-.374 1.205-1.428 0-1.944.473-3.626.891-5.11v-.001l.03-.102z"
					clipRule="evenodd"
				/>
			</mask>
			<path
				fillRule="evenodd"
				d="M12.22 2.222c.048.38.107.743.173 1.092.094.488.204.948.329 1.383.684 2.396 1.79 4.063 2.799 5.584 1.23 1.855 2.315 3.492 2.315 5.965 0 3.18-2.671 5.758-5.834 5.758-3.164 0-5.835-2.578-5.835-5.758 0-2.473 1.086-4.11 2.316-5.965 1.01-1.52 2.115-3.188 2.8-5.584.124-.435.234-.895.328-1.383.066-.349.125-.712.173-1.091l.007-.054c.027-.224.394-.224.423 0l.006.052v.001zm-2.428 8.599c.74-1.12 1.551-2.378 2.21-3.973.659 1.595 1.47 2.854 2.21 3.972l.082.125c1.281 1.936 2.153 3.252 2.153 5.3 0 2.387-2.023 4.37-4.445 4.37-2.423 0-4.446-1.982-4.446-4.37 0-2.048.872-3.364 2.154-5.3l.082-.124zm1.365.134c.059-.208.116-.408.168-.604a.338.338 0 00-.056-.287c-.131-.177-.42-.185-.527-.006-.234.39-.523.783-.83 1.198-.978 1.324-2.084 2.826-2.084 5.126a1.21 1.21 0 001.204 1.214c.582 0 1.205-.374 1.205-1.428 0-1.944.473-3.626.891-5.11v-.001l.03-.102z"
				clipRule="evenodd"
			/>
			<path
				d="M12.393 3.314l-.426.082.426-.082zm-.173-1.092l-.43.055.43-.055zm.502 2.475l-.418.12.418-.12zm2.799 5.584l.361-.24-.361.24zm-7.038 0l.362.24-.362-.24zm2.8-5.584l-.418-.119.417.12zm.328-1.383l.426.082-.426-.082zm.173-1.091l.43.055-.43-.055zm0 0l.43.054-.43-.055zm.007-.054l.43.054v-.002l-.43-.052zm.423 0l-.431.054.43-.054zm.006.052l-.43.054.43-.054zm-.218 4.627l.401-.165-.401-.972-.401.972.401.165zm-2.21 3.973l.362.24-.362-.24zm4.42 0l-.362.239.361-.24zm.082.124l-.362.24.362-.24zm-4.584 0l.362.24-.362-.24zm1.615-.594l.42.112-.42-.112zm-.168.604l.418.118-.418-.118zm.112-.89l.35-.259h-.001l-.349.258zm-.527-.007l.372.223-.372-.223zm-.83 1.198l-.349-.259v.001l.349.258zm-2.084 5.126l.434.002v-.002h-.434zm.742 1.12l-.168.4.168-.4zm.462.094l-.001.434h.001v-.434zm2.096-6.537l.418.117-.418-.117zm0-.002l-.417-.118.418.118zm1.692-7.825c-.065-.34-.122-.694-.17-1.065l-.86.11c.049.388.109.76.177 1.119l.853-.164zm.32 1.346c-.122-.423-.23-.87-.32-1.346l-.853.164c.096.5.21.972.337 1.42l.835-.238zm2.742 5.463c-1.008-1.52-2.08-3.138-2.743-5.463l-.835.239c.705 2.465 1.845 4.182 2.855 5.704l.723-.48zm2.388 6.205c0-2.619-1.162-4.357-2.388-6.205l-.723.48c1.234 1.862 2.243 3.398 2.243 5.725h.868zm-6.268 6.192c3.394 0 6.268-2.765 6.268-6.192h-.868c0 2.932-2.469 5.324-5.4 5.324v.868zm-6.27-6.192c0 3.428 2.875 6.192 6.27 6.192v-.868c-2.933 0-5.401-2.392-5.401-5.324h-.868zm2.39-6.205c-1.226 1.848-2.39 3.586-2.39 6.205h.869c0-2.327 1.009-3.863 2.244-5.725l-.724-.48zm2.743-5.463C10.2 6.903 9.13 8.521 8.12 10.041l.724.48C9.855 9 10.995 7.283 11.7 4.817l-.835-.239zm.32-1.345a15.56 15.56 0 01-.32 1.345l.835.239c.128-.449.241-.92.337-1.42l-.853-.164zm.168-1.065c-.047.37-.104.724-.169 1.065l.853.163c.068-.358.128-.73.177-1.118l-.86-.11zm0 0l.861.11v-.001l-.86-.11zm.007-.053l-.007.053.862.108.006-.053-.861-.108zm1.284 0c-.05-.4-.405-.548-.642-.548-.238 0-.594.148-.642.55l.862.104a.257.257 0 01-.104.174.2.2 0 01-.116.04.198.198 0 01-.116-.04.255.255 0 01-.103-.172l.861-.108zm.007.052l-.007-.052-.861.108.006.052.862-.108zm0 0l-.861.108v.002l.86-.11zM11.6 6.684c-.642 1.553-1.432 2.782-2.17 3.898l.723.48c.742-1.122 1.573-2.41 2.25-4.047l-.803-.331zm2.972 3.898c-.738-1.116-1.528-2.345-2.17-3.898l-.802.331c.675 1.636 1.506 2.924 2.248 4.046l.724-.479zm.083.124l-.083-.124-.723.48.082.123.724-.479zm2.225 5.54c0-2.196-.952-3.617-2.225-5.54l-.724.48c1.29 1.948 2.081 3.161 2.081 5.06h.868zm-4.879 4.804c2.654 0 4.88-2.17 4.88-4.803h-.869c0 2.14-1.821 3.935-4.01 3.935v.868zm-4.88-4.803c0 2.634 2.224 4.803 4.88 4.803v-.868c-2.191 0-4.012-1.795-4.012-3.935h-.868zm2.226-5.54c-1.273 1.922-2.226 3.343-2.226 5.54h.868c0-1.9.791-3.113 2.082-5.061l-.724-.48zm.082-.125l-.082.124.724.48.082-.125-.724-.479zm1.476-.343c-.052.193-.108.39-.166.599l.835.236c.059-.207.116-.41.17-.61l-.839-.225zm.014.084a.097.097 0 01-.014-.084l.839.225a.772.772 0 00-.127-.657l-.698.516zm.194-.041a.154.154 0 01-.125.08.087.087 0 01-.069-.039l.698-.516a.782.782 0 00-.614-.313.717.717 0 00-.634.342l.744.446zm-.854 1.233c.306-.412.607-.821.854-1.233l-.744-.447c-.222.37-.498.746-.807 1.163l.697.517zm-1.998 4.868c0-2.143 1.02-3.542 1.999-4.868l-.699-.516c-.975 1.322-2.168 2.928-2.168 5.384h.868zm.058.298a.775.775 0 01-.058-.296l-.868-.004c0 .216.04.43.122.63l.804-.33zm.167.253a.775.775 0 01-.167-.253l-.804.33c.082.199.202.38.354.534l.617-.611zm.25.169a.776.776 0 01-.25-.17l-.617.612c.152.153.333.275.532.359l.336-.801zm.297.06a.774.774 0 01-.296-.06l-.336.8c.2.084.413.127.629.128l.003-.868zm.769-.994c0 .44-.128.675-.255.8a.72.72 0 01-.516.194v.868c.381 0 .8-.123 1.125-.443.33-.325.514-.804.514-1.419h-.868zm.907-5.227c-.416 1.48-.907 3.215-.907 5.227h.868c0-1.877.456-3.505.875-4.992l-.836-.235zm0-.002v.002l.836.235v-.002l-.835-.235zm.03-.102l-.03.102.836.236.03-.102-.836-.236z"
				mask="url(#a)"
			/>
		</svg>
	);
};
export const DropCirclef = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon dropCircle-f';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">
			<path
				fillRule="evenodd"
				d="M24.002 48.004c13.256 0 24.002-10.746 24.002-24.002C48.004 10.746 37.258 0 24.002 0 10.746 0 0 10.746 0 24.002c0 13.256 10.746 24.002 24.002 24.002zm-.198-33.256c.025-.21.371-.21.398 0 .45 3.62 1.86 5.747 3.112 7.634 1.157 1.746 2.179 3.286 2.179 5.613 0 2.993-2.514 5.42-5.49 5.42-2.978 0-5.492-2.426-5.492-5.42 0-2.327 1.022-3.867 2.18-5.613 1.252-1.887 2.663-4.014 3.113-7.634zm-.597 8.272c.055-.195.109-.384.158-.569a.318.318 0 00-.053-.27c-.123-.166-.395-.174-.496-.005-.22.367-.492.737-.781 1.127-.92 1.246-1.961 2.66-1.961 4.824a1.14 1.14 0 001.133 1.143c.547 0 1.134-.352 1.134-1.344 0-1.83.445-3.413.838-4.808l.001-.002.027-.096z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
export const FistRaisedCirclef = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon fistRaisedCircle-f';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">
			<path
				fillRule="evenodd"
				d="M24.002 48.006c13.256 0 24.002-10.746 24.002-24.002C48.004 10.748 37.258.002 24.002.002 10.746.002 0 10.748 0 24.004 0 37.26 10.746 48.006 24.002 48.006zm-4.937-12.707h9.22c.04-.352.079-.679.114-.971.077-.638.218-1.99.105-2.623-.2-1.125-.81-3.345-1.327-5.232-.141-.516-.276-1.007-.393-1.444-.42-1.562-1.003-3.346-1.53-4.963-.363-1.11-.7-2.143-.941-2.97-.171-.587-.353-1.415-.522-2.185-.229-1.046-.435-1.987-.561-2.077-.454-.326-2.46.034-2.869.52-.431.513-.17 1.746.108 2.238.11.195.424.283.739.372.345.098.692.195.774.433.572 1.672 1.496 6.426 1.899 9.16.146.995.164 2.2.18 3.359.017 1.082.032 2.125.152 2.92-.973.637-2.318 1.49-3.436 2.088 0 0-1.236.204-1.712 1.375zm1.725-2.497c1.148 0 2.193-.45 2.966-1.182-.008-.07-.055-.948-.113-2.04-.1-1.841-.23-4.29-.262-4.493l-.01-.064a4.32 4.32 0 00-6.898 3.46 4.32 4.32 0 004.317 4.319z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
export const Hearto = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon heart-o';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18">
			<path
				fillRule="evenodd"
				d="M14.659 1.6h-.002a3.698 3.698 0 00-3.135 1.731l-1.354 2.156-1.355-2.154a3.697 3.697 0 00-6.827 1.934c.013.736.233 1.453.634 2.07l.009.014.009.014c.199.321.767 1.033 1.62 2.02.82.948 1.82 2.058 2.802 3.13a323.627 323.627 0 003.105 3.337c.758-.805 1.912-2.038 3.103-3.337a154.506 154.506 0 002.804-3.131c.854-.986 1.425-1.7 1.627-2.023l.008-.012.008-.012c.4-.617.62-1.335.634-2.072a3.69 3.69 0 00-3.69-3.665zm5.29 3.674a5.533 5.533 0 01-.893 2.935c-1.119 1.792-8.302 9.35-8.607 9.671a.391.391 0 01-.563 0C9.571 17.56 2.388 10 1.277 8.21a5.533 5.533 0 01-.892-2.935 5.297 5.297 0 019.781-2.793A5.292 5.292 0 0114.659 0a5.29 5.29 0 015.29 5.274z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
export const Homef = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon home-f';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
			<path d="M29.574 15.784l-12.87-12.86a.998.998 0 00-1.412 0l-12.87 12.86a2.002 2.002 0 001.413 3.415h1.356v9.177a1 1 0 001 1h7.808v-6.999h3.499v6.999h8.308a1 1 0 001-1v-9.177h1.356a1.99 1.99 0 001.415-.587 2.002 2.002 0 00-.003-2.828z" />
		</svg>
	);
};
export const Homeo = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon home-o';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
			<path d="M22.677 11.838l-9.058-9.053-.607-.607a.738.738 0 00-1.04 0l-9.666 9.66a1.498 1.498 0 00-.44 1.079c.01.825.696 1.483 1.521 1.483h.996v7.635H20.6V14.4h1.017c.401 0 .778-.157 1.062-.44a1.491 1.491 0 00.438-1.062c0-.399-.157-.776-.44-1.06zm-8.873 8.51H11.18v-4.782h2.625v4.781zm5.108-7.635v7.635h-3.607v-5.345a.937.937 0 00-.938-.938h-3.75a.937.937 0 00-.938.938v5.345H6.07v-7.635h-2.25l8.673-8.666.541.541 8.13 8.125h-2.253z" />
		</svg>
	);
};
export const Libraryf = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon library-f';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
			<path d="M9.21 3.003h11.399a.9.9 0 01.9.9v11.4a.9.9 0 01-.9.899h-11.4a.9.9 0 01-.9-.9V3.903a.9.9 0 01.9-.9z" />
			<path d="M7.11 17.403v-12h-1.2v12.3a.9.9 0 00.9.9h12.3v-1.2h-12z" />
			<path d="M4.71 7.803v11.999H16.71v1.2H4.41a.9.9 0 01-.9-.9v-12.3h1.2z" />
		</svg>
	);
};
export const Libraryo = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon library-o';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
			<path
				fillRule="evenodd"
				d="M20.609 3.003h-11.4a.9.9 0 00-.9.9v11.4a.9.9 0 00.9.899h11.4a.9.9 0 00.9-.9V3.903a.9.9 0 00-.9-.9zm-.3 12h-10.8v-10.8h10.8v10.8zm-13.198 2.4v-12h-1.2v12.3a.9.9 0 00.9.9H19.11v-1.2h-12zm-2.4-9.6v11.999h11.998v1.2H4.41a.9.9 0 01-.9-.9v-12.3h1.2z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
export const Listf = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon list-f';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				fillRule="evenodd"
				d="M5.41 2.498h13.18c.818 0 1.48.663 1.48 1.481v16.042a1.48 1.48 0 01-1.48 1.48H5.41a1.48 1.48 0 01-1.48-1.48V3.98c0-.818.662-1.48 1.48-1.48zm1.822 2.116l.293.695.752.065-.57.494.17.735-.645-.39-.646.39.17-.735-.57-.494.752-.065.294-.695zM17.43 5h-8.33a.2.2 0 00-.2.2v.828c0 .11.089.2.2.2h8.33a.2.2 0 00.2-.2V5.2a.2.2 0 00-.2-.2zm0 2.554h-8.33a.2.2 0 00-.2.2v.828c0 .11.089.2.2.2h8.33a.2.2 0 00.2-.2v-.828a.2.2 0 00-.2-.2zm-8.33 2.555h8.33c.11 0 .2.09.2.2v.827a.2.2 0 01-.2.2h-8.33a.2.2 0 01-.2-.2v-.827c0-.11.089-.2.2-.2zm8.33 2.504h-8.33a.2.2 0 00-.2.2v.827c0 .11.089.2.2.2h8.33a.2.2 0 00.2-.2v-.827a.2.2 0 00-.2-.2zm-8.33 2.454h8.33c.11 0 .2.09.2.2v.828a.2.2 0 01-.2.2h-8.33a.2.2 0 01-.2-.2v-.828c0-.11.089-.2.2-.2zM7.524 7.864l-.293-.696-.294.696-.752.064.57.494-.17.735.646-.39.646.39-.171-.735.57-.494-.752-.064zm-.293 1.858l.293.696.752.064-.57.495.17.734-.645-.39-.646.39.17-.735-.57-.494.752-.064.294-.696zm.293 3.25l-.293-.695-.294.695-.752.065.57.494-.17.735.646-.39.646.39-.171-.735.57-.494-.752-.065zm-.293 1.86l.293.694.752.065-.57.494.17.735-.645-.39-.646.39.17-.735-.57-.494.752-.065.294-.695z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
export const Listo = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon list-o';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				fillRule="evenodd"
				d="M18.59 2.498H5.41A1.48 1.48 0 003.93 3.98v16.042c0 .818.663 1.48 1.48 1.48h13.18a1.48 1.48 0 001.48-1.48V3.98a1.48 1.48 0 00-1.48-1.48zm.361 16.994a.987.987 0 01-.986.987H6.035a.987.987 0 01-.987-.987V4.508c0-.545.442-.986.987-.986h11.93c.546 0 .987.441.987.986v14.984zM17.427 7.55h-8.33a.2.2 0 00-.2.2v.827c0 .11.089.2.2.2h8.33a.2.2 0 00.2-.2V7.75a.2.2 0 00-.2-.2zm-8.33-2.554h8.33c.11 0 .2.09.2.2v.827a.2.2 0 01-.2.2h-8.33a.2.2 0 01-.2-.2v-.827c0-.11.089-.2.2-.2zm8.33 5.109h-8.33a.2.2 0 00-.2.2v.827c0 .11.089.2.2.2h8.33a.2.2 0 00.2-.2v-.828a.2.2 0 00-.2-.2zm-8.33 2.503h8.33c.11 0 .2.09.2.2v.827a.2.2 0 01-.2.2h-8.33a.2.2 0 01-.2-.2v-.827c0-.11.089-.2.2-.2zm8.33 2.455h-8.33a.2.2 0 00-.2.2v.827c0 .11.089.2.2.2h8.33a.2.2 0 00.2-.2v-.827a.2.2 0 00-.2-.2zm-9.9-9.753l-.294-.695-.294.695-.752.065.57.494-.17.735.646-.39.646.39-.171-.735.57-.494-.752-.065zm-.294 1.86l.293.695.752.064-.57.494.17.735-.645-.39-.646.39.17-.735-.57-.494.752-.064.294-.696zm.293 3.249l-.293-.696-.294.696-.752.064.57.495-.17.734.646-.39.646.39-.171-.735.57-.494-.752-.064zm-.293 1.86l.293.694.752.065-.57.494.17.735-.645-.39-.646.39.17-.735-.57-.494.752-.065.294-.695zm.293 3.248l-.293-.695-.294.695-.752.065.57.494-.17.735.646-.39.646.39-.171-.735.57-.494-.752-.065z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
export const ParametersCirclef = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon parametersCircle-f';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
			<path
				fillRule="evenodd"
				d="M17 34c9.389 0 17-7.611 17-17S26.389 0 17 0 0 7.611 0 17s7.611 17 17 17zm-.406-22.217h6.348c.406 0 .725.319.725.724a.718.718 0 01-.725.725h-6.348c-.319.84-1.101 1.45-2.058 1.45a2.172 2.172 0 01-2.058-1.45h-1.42a.718.718 0 01-.725-.725c0-.405.32-.724.725-.724h1.42c.32-.841 1.102-1.45 2.058-1.45.957 0 1.768.609 2.058 1.45zm-2.782.724c0 .406.318.725.724.725a.718.718 0 00.725-.725.718.718 0 00-.725-.724.718.718 0 00-.724.724zm-2.754 5.218a.718.718 0 01-.725-.725c0-.406.32-.725.725-.725h6.348c.319-.84 1.101-1.449 2.058-1.449.956 0 1.768.609 2.058 1.45h1.42c.406 0 .725.318.725.724a.718.718 0 01-.725.725h-1.42c-.32.84-1.102 1.449-2.058 1.449a2.172 2.172 0 01-2.058-1.45h-6.348zm8.406-1.45a.718.718 0 00-.725.725c0 .406.319.725.725.725a.718.718 0 00.724-.725.718.718 0 00-.724-.725zm-2.87 4.493h6.348c.406 0 .725.319.725.725a.718.718 0 01-.725.724h-6.348c-.319.841-1.101 1.45-2.058 1.45a2.172 2.172 0 01-2.058-1.45h-1.42a.718.718 0 01-.725-.724c0-.406.32-.725.725-.725h1.42c.32-.84 1.102-1.45 2.058-1.45.957 0 1.768.61 2.058 1.45zm-2.782.725c0 .406.318.724.724.724a.718.718 0 00.725-.724.718.718 0 00-.725-.725.718.718 0 00-.724.725z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
export const PinCirclef = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon pinCircle-f';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">
			<path
				fillRule="evenodd"
				d="M24.002 48.004c13.256 0 24.002-10.746 24.002-24.002C48.004 10.746 37.258 0 24.002 0 10.746 0 0 10.746 0 24.002c0 13.256 10.746 24.002 24.002 24.002zm-1.83-25.278a2.59 2.59 0 103.661-3.662 2.59 2.59 0 00-3.662 3.662zm-3.296-6.957a7.249 7.249 0 0112.375 5.126c0 5.437-7.249 13.463-7.249 13.463s-7.249-8.026-7.249-13.463c0-1.922.764-3.766 2.123-5.126z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
export const ShareCirclef = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon shareCircle-f';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 35">
			<path
				fillRule="evenodd"
				d="M17 34.727c9.389 0 17-7.61 17-17 0-9.388-7.611-17-17-17s-17 7.612-17 17c0 9.39 7.611 17 17 17zm-2.3-15.692a2.196 2.196 0 01-1.489.587 2.213 2.213 0 01-2.21-2.21 2.207 2.207 0 014.062-1.199l3.59-2.052a2.197 2.197 0 01-.074-.538c0-1.219.991-2.21 2.21-2.21 1.219 0 2.21.991 2.21 2.21 0 1.219-.991 2.21-2.21 2.21a2.2 2.2 0 01-1.49-.587l-3.883 2.22a2.11 2.11 0 01-.069.484l3.954 2.26a2.196 2.196 0 011.488-.588c1.219 0 2.21.991 2.21 2.21 0 1.219-.991 2.21-2.21 2.21a2.213 2.213 0 01-2.21-2.21c.002-.182.027-.363.074-.539L14.7 19.035zm7.036 2.797a.948.948 0 00-1.894 0 .948.948 0 001.894 0zm0-8.21a.948.948 0 00-1.894 0 .948.948 0 001.894 0zm-7.578 3.79a.948.948 0 00-1.894 0 .948.948 0 001.894 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
export const Usero = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon user-o';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
			<path
				fillRule="evenodd"
				d="M12.004 3.603h.004A2.685 2.685 0 119.322 6.29v-.004a2.676 2.676 0 012.682-2.682zm-1.638-1.276a4.276 4.276 0 011.642-.324A4.285 4.285 0 117.722 6.29a4.276 4.276 0 012.644-3.962zM4.388 19.069v-.553a4.952 4.952 0 014.762-5.085h5.714a4.962 4.962 0 014.761 5.057v.58a11.361 11.361 0 01-15.237 0zm2.504-2.98a3.352 3.352 0 012.292-1.058h5.645a3.362 3.362 0 013.197 3.294 9.761 9.761 0 01-12.039 0c.014-.83.335-1.628.905-2.237z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
export const Dropf = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon svg-icon drop-f-svg';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
			<path d="M12.213 2.169c-.028-.224-.396-.224-.423 0-.92 7.403-5.623 8.929-5.623 14.074 0 3.18 2.67 5.758 5.834 5.758 3.163 0 5.833-2.579 5.833-5.758 0-5.145-4.702-6.671-5.621-14.074zm-.889 8.184c-.061.228-.128.462-.197.706-.418 1.483-.892 3.166-.892 5.11 0 1.055-.622 1.429-1.204 1.429a1.21 1.21 0 01-1.204-1.215c0-2.299 1.106-3.801 2.084-5.125.307-.414.595-.807.83-1.198.107-.179.396-.17.527.006.061.084.082.19.056.287z" />
		</svg>
	);
};
export const FistRaisedf = (props) => {
	const { className, ...rest } = props;
	const cName = (className || '') + 'icon svg-icon fistRaised-f-svg';
	return (
		<svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24">
			<g clip-path="url(#clip0)">
				<path d="M13.059 17.218c.017 1.15.033 2.259.16 3.103-1.033.677-2.463 1.583-3.65 2.218 0 0-3.206.529-1.53 4.68.813 2.014 2.28 8.415 1.8 10.26-.688 2.646 12.336 1.803 11.07-.09-.756-1.13-1.548-2.51-2.23-3.7-.303-.527-.583-1.017-.83-1.43-1.057-1.771-.488-6.76-.182-9.29.081-.678.231-2.115.111-2.787-.213-1.195-.86-3.554-1.41-5.559-.15-.548-.292-1.07-.417-1.534-.447-1.66-1.066-3.554-1.626-5.272-.385-1.18-.743-2.277-1-3.157-.181-.623-.374-1.502-.553-2.32-.244-1.112-.463-2.112-.597-2.207-.482-.346-2.614.036-3.048.552-.458.545-.18 1.855.115 2.378.116.207.45.301.785.395.367.104.735.208.822.46.608 1.777 1.59 6.828 2.017 9.732.156 1.058.175 2.337.193 3.568z" />
				<path d="M9.583 21.347c1.22 0 2.33-.478 3.151-1.256-.008-.074-.058-1.007-.12-2.166-.106-1.956-.245-4.559-.279-4.774l-.01-.068a4.59 4.59 0 00-7.33 3.677 4.59 4.59 0 004.588 4.587z" />
			</g>
			<defs>
				<clipPath id="clip0">
					<path d="M0 0h24v24H0z" transform="translate(.995)" />
				</clipPath>
			</defs>
		</svg>
	);
};
