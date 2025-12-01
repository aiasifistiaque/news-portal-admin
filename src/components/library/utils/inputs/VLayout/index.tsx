'use client';

import {
	Menu,
	MenuGroup,
	Flex,
	Input,
	useDisclosure,
	MenuDivider,
	Button,
	Grid,
	Image,
	Center,
} from '@chakra-ui/react';

import { useState, FC, useRef, useEffect } from 'react';

import {
	DataMenuButton,
	CreateModal,
	MenuContainer,
	MenuItem,
	ItemOfDataMenu,
	useGetAllQuery,
	FormControl,
	Scroll,
	CreateServerModal,
	ImageContainer,
} from '../../..';

import { VDataMenuProps } from './types';
import { hiddenInputCss, searchInputCss, unselectTextCss, MAX_H, WIDTH } from './styles';

const VDataMenu: FC<VDataMenuProps> = ({
	label,
	item,
	isRequired,
	placeholder,
	value,
	helper,
	model,
	dataModel,
	hideNew = false,
	field,
	type = 'value',
	dataKey = '_id',
	menuKey = 'name',
	menuAddOnKey,
	unselect = true,
	...props
}) => {
	const { onOpen, onClose, isOpen } = useDisclosure();

	const [title, setTitle] = useState<string>(`Select ${label}`);
	const [search, setSearch] = useState<string>('');

	const { data, isFetching, isError, error, isSuccess } = useGetAllQuery({
		path: model,
		limit: '999',
		sort: 'name',
		search,
	});

	const handleChange = (e: any) => {
		if (props.onChange) {
			const event = {
				target: {
					name: props.name,
					value: e,
				},
			} as any;
			props.onChange(event);
		}
		setTitle(e?.name);
		onClose();
	};

	const inputRef = useRef<any>(null);
	const btnRef = useRef<any>(null);
	const addItemRef = useRef<any>(null);

	useEffect(() => {
		if (isOpen) {
			if (inputRef.current) inputRef.current.focus();
		}
	}, [isOpen, onOpen, onClose]);

	return (
		<Flex w='full'>
			{dataModel && (
				<CreateModal
					data={dataModel}
					path={model}
					trigger={
						<Button
							display='none'
							ref={btnRef}>
							Add new {model}
						</Button>
					}
					type='post'
				/>
			)}
			<FormControl
				isRequired={isRequired}
				label={label}
				helper={helper}
				w='full'>
				<p>value: {value}</p>
				<Grid
					gridTemplateColumns='1fr 1fr 1fr'
					gap={4}>
					{data?.doc?.map((item: any, i: number) => (
						<ImageContainer
							onClick={() => handleChange(item?.slug)}
							h='200px'
							w='full'
							cursor='pointer'
							p={1}
							border='2px solid'
							borderColor={item?.slug == value ? 'brand.500' : '#ddd'}
							bg='background.light'
							_dark={{
								bg: 'background.dark',
								borderColor: item?.slug == value ? 'brand.200' : '#555',
							}}
							key={i}>
							<Image
								src={item?.image}
								alt={item?.name}
								h='full'
								w='full'
								objectFit='contain'
							/>
						</ImageContainer>
					))}
				</Grid>
			</FormControl>
		</Flex>
	);
};

export default VDataMenu;
