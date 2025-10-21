import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

function upsertMeta(name, content) {
	let el = document.querySelector(`meta[name="${name}"]`);
	if (!el) {
		el = document.createElement("meta");
		el.setAttribute("name", name);
		document.head.appendChild(el);
	}
	el.setAttribute("content", content);
}

function upsertCanonical(href) {
	let el = document.querySelector('link[rel="canonical"]');
	if (!el) {
		el = document.createElement("link");
		el.setAttribute("rel", "canonical");
		document.head.appendChild(el);
	}
	el.setAttribute("href", href);
}

export default function ThankYou() {
	const navigate = useHistory();
	const firedRef = useRef(false);

	useEffect(() => {
		const isFormSubmission = sessionStorage.getItem("formSubmitted");

		if (firedRef.current) return;
		firedRef.current = true;

		if (isFormSubmission !== "true") {
			navigate.replace("/");
			return;
		}

		// Push event to GTM when the thank-you page loads
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: "form_submission",
			form_name: "contact us",
            form_location: "/contact",
            form_type: "lead",
			status: "success",
		});

		sessionStorage.removeItem("formSubmitted");

		upsertMeta("robots", "noindex,nofollow,noarchive");
		upsertMeta("googlebot", "noindex,nofollow,noarchive");
		upsertCanonical(`${window.location.origin}/`);
		document.title = "Thank You";
	}, [navigate]);

	return (
		<>
			<div className='flex items-center justify-center min-h-screen bg-gray-900'>
				<div className='bg-white p-8 rounded-xl shadow-lg text-center max-w-md'>
					<h1 className='text-2xl font-bold mb-2 text-gray-900'>Thank you!</h1>
					<p className='text-gray-700 mb-4'>
						Your form submission has been received.
					</p>
					<a href='/' className='text-blue-600 font-semibold hover:underline'>
						← Back to Home
					</a>
				</div>
			</div>
		</>
	);
}
