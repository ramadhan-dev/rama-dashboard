import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

const createUser = () => {
	return {
		name: faker.person.fullName(),
		email: faker.internet.email(),
		address: faker.location.streetAddress(),
		bio: faker.lorem.sentence(),
		image: faker.lorem.lines(),
	};
};

const dt = faker.helpers.multiple(createUser, { count: 1000 })



export function mockAPI({
	pagination: { limit = 10, skip = 0 } = {},
	sort: { field = "id", order = "ASC" } = {},
} = {}) {
	const episodes = [
		...dt.sort((a:any, b:any) => {
			const [first, second] =
				order === "ASC" ? [a[field], b[field]] : [b[field], a[field]];
			if (typeof first === "string" && typeof second === "string") {
				return first.localeCompare(second);
			}
			return first - second;
		}),
	].slice(skip, skip + limit);

	let timeoutId:any;

	const res = new Promise((resolve) => {
		timeoutId = setTimeout(() => {
			resolve([episodes, dt.length]);
		}, 1000);
	});

	return { res, abort: () => clearTimeout(timeoutId) };
}

export function useMockAPI(
	query = "",
	{
		pagination: { limit = 10, skip = 0 } = {},
		sort: { field = "id", order = "ASC" } = {},
	} = {},
) {
	const [data, setData] = useState([]);
	const [count, setCount] = useState(0);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);

		const { res, abort } = mockAPI({
			pagination: {
				limit,
				skip,
			},
			sort: {
				field,
				order,
			},
		});

		res.then(([_data, _count]:any) => {
			setData(_data);
			setCount(_count);
			setLoading(false);
		});

		return () => abort();
	}, [limit, skip, field, order, setData, setLoading]);

	return [data, count, loading];
}
