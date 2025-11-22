'use client';

import { Button, Grid, Heading } from '@chakra-ui/react';

import {
	Layout,
	Count,
	useAppSelector,
	useGetByIdQuery,
	ShowSum,
	useGetSumQuery,
	Column,
	FlexChild,
	DashContainer,
	SpaceBetween,
} from '@/components/library';
import OrderTable from '@/components/dashboard/OrderTable';
import Link from 'next/link';

export default function UserFeedback() {
	const { filters } = useAppSelector((state: any) => state.table);

	const { data, isFetching, isError, error, isSuccess }: any = useGetByIdQuery({
		path: 'sms/check',
		id: 'balance',
	});

	const {
		data: storageData,
		isFetching: storageIsFetching,
		isError: storageError,
	} = useGetSumQuery({
		path: 'files',
		field: 'size',
	});

	const {
		data: awsBillData,
		isFetching: awsBillIsFetching,
		isError: awsBillError,
	} = useGetSumQuery({
		path: 'upload',
		field: 'awsbill',
	});

	const {
		data: s3Data,
		isFetching: s3IsFetching,
		isError: s3Error,
	} = useGetSumQuery({
		path: 'upload',
		field: 's3',
	});

	const convertSizeToKb = (size: number) => {
		if (size === undefined || size === null) return '--';

		const bytes = size;
		const k = 1024;
		const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];

		if (bytes === 0) return '0 B';

		const i = Math.floor(Math.log(bytes) / Math.log(k));
		const convertedSize = bytes / Math.pow(k, i);

		return parseFloat(convertedSize.toFixed(2)) + ' ' + sizes[i];
	};

	return (
		<Layout
			title='Dashboard'
			path='dashboard'>
			<Grid
				pt={3}
				gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
				gap={2}>
				<Count
					href='/articles'
					title='Articles'
					path='articles'
				/>
				<Count
					href='/videos'
					title='Videos'
					path='videos'
				/>
				<Count
					href='/authors'
					title='Authors'
					path='authors'
				/>

				<Count
					href='/categories'
					title='Categories'
					path='categories'
				/>
				<Count
					href='/advertisements'
					title='Advertisements'
					path='advertisements'
				/>
				<Count
					href='/admins'
					title='Users'
					path='admins'
				/>
			</Grid>

			<DashContainer pt={4}>
				<SpaceBetween
					align='center'
					px={4}>
					<Heading size='md'>Popular Articles</Heading>
					<Link href='/articles'>
						<Button size='xs'>View Articles</Button>
					</Link>
				</SpaceBetween>
				<OrderTable />
			</DashContainer>
		</Layout>
	);
}

const Col = ({ children, ...props }: FlexChild) => (
	<Column
		gap={6}
		py={6}
		{...props}>
		{children}
	</Column>
);
