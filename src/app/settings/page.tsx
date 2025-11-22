'use client';

import {
	Layout,
	Icon,
	useGetSelfQuery,
	useUpdateSelfMutation,
	useCustomToast,
	Details,
	Column,
	ContentManager,
} from '@/components/library';
import { Button, Flex, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import UserEdit from './_components/UserEdit';

const SettingsPage = () => {
	return (
		<Layout
			title='Settings'
			path='settings'>
			<Column
				gap={4}
				pt={4}>
				<UserEdit />
				<ContentManager
					dataModel={[
						{
							name: 'content',
							type: 'string',
							label: 'Google Tag Manager',
							helper: 'Paste Your Goodle Tag manager ID. E.g., GTM-XXXXXXX',
							isRequired: true,
						},
					]}
					title='Google Tag Manager'
					subTitle='Manage your Google Tag Manager settings here. Add or update your GTM ID to integrate with your store seamlessly.'
					slug='google-tag-manager'
					successMessage='Google Tag Manager updated successfully'
				/>
				<ContentManager
					dataModel={[
						{
							name: 'content',
							type: 'string',
							label: 'Meta Pixel',
							helper: 'Paste Your Meta Pixel ID. E.g., 1234567890',
							isRequired: true,
						},
					]}
					title='Meta Pixel'
					subTitle='Manage your Meta Pixel settings here. Add or update your Meta Pixel ID to integrate with your store seamlessly.'
					slug='meta-pixel'
					successMessage='Meta Pixel updated successfully'
				/>
				<ContentManager
					dataModel={[
						{
							name: 'image',
							type: 'image',
							label: 'SEO Image',
							helper: 'Your SEO Image. E.g., https://example.com/image.jpg',
							isRequired: true,
						},
						{
							name: 'title',
							type: 'string',
							label: 'SEO Title',
							helper: 'Your SEO Title. E.g., My Awesome Store',
							isRequired: true,
						},
						{
							name: 'description',
							type: 'textarea',
							label: 'SEO Description',
							helper: 'Your SEO Description. E.g., My Awesome Store',
							isRequired: true,
						},
					]}
					title='SEO Settings'
					path='seo'
					subTitle='Optimize your portal for search engines by managing your SEO settings here. Add or update your SEO metadata to enhance your store visibility.'
					slug='home'
					successMessage='Store SEO settings updated successfully'
				/>
			</Column>
		</Layout>
	);
};

export default SettingsPage;
