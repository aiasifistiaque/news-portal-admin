import React, { useEffect } from 'react';
import { TableObjectProps, useGetConfigQuery } from '@/components/library';
import TableCustom from '../library/sections/table/TableCustom';

const OrderTable = () => {
	const { data, isFetching } = useGetConfigQuery('articles');

	const viewAll: TableObjectProps = {
		title: 'Popular Articles',
		path: 'articles',
		clickable: true,
		toPath: 'articles',
		export: false,
		search: false,
		hidePreferences: true,
		filters: false,
		pagination: false,
		sort: '-views',
		limit: 5,
		preferences: ['code', 'name', 'views', 'createdAt', 'author.name'],
		data: data?.table,
		showMenu: false,
	};
	return <TableCustom table={viewAll} />;
};

export default OrderTable;
