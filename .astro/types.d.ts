declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof AnyEntryMap> = AnyEntryMap[C][keyof AnyEntryMap[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"components/accordion.mdx": {
	id: "components/accordion.mdx";
  slug: "components/accordion";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/avatar.mdx": {
	id: "components/avatar.mdx";
  slug: "components/avatar";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/badge.mdx": {
	id: "components/badge.mdx";
  slug: "components/badge";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/button.mdx": {
	id: "components/button.mdx";
  slug: "components/button";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/callout.mdx": {
	id: "components/callout.mdx";
  slug: "components/callout";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/card.mdx": {
	id: "components/card.mdx";
  slug: "components/card";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/charts.mdx": {
	id: "components/charts.mdx";
  slug: "components/charts";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/checkbox.mdx": {
	id: "components/checkbox.mdx";
  slug: "components/checkbox";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/combobox.mdx": {
	id: "components/combobox.mdx";
  slug: "components/combobox";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/dialog.mdx": {
	id: "components/dialog.mdx";
  slug: "components/dialog";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/dropdown-menu.mdx": {
	id: "components/dropdown-menu.mdx";
  slug: "components/dropdown-menu";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/input.mdx": {
	id: "components/input.mdx";
  slug: "components/input";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/label.mdx": {
	id: "components/label.mdx";
  slug: "components/label";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/mode-toggle.mdx": {
	id: "components/mode-toggle.mdx";
  slug: "components/mode-toggle";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/popover.mdx": {
	id: "components/popover.mdx";
  slug: "components/popover";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/progress.mdx": {
	id: "components/progress.mdx";
  slug: "components/progress";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/radio-group.mdx": {
	id: "components/radio-group.mdx";
  slug: "components/radio-group";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/select.mdx": {
	id: "components/select.mdx";
  slug: "components/select";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/separator.mdx": {
	id: "components/separator.mdx";
  slug: "components/separator";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/sheet.mdx": {
	id: "components/sheet.mdx";
  slug: "components/sheet";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/switch.mdx": {
	id: "components/switch.mdx";
  slug: "components/switch";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/table.mdx": {
	id: "components/table.mdx";
  slug: "components/table";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/tabs.mdx": {
	id: "components/tabs.mdx";
  slug: "components/tabs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/textarea.mdx": {
	id: "components/textarea.mdx";
  slug: "components/textarea";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/toast.mdx": {
	id: "components/toast.mdx";
  slug: "components/toast";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"components/tooltip.mdx": {
	id: "components/tooltip.mdx";
  slug: "components/tooltip";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"introduction.mdx": {
	id: "introduction.mdx";
  slug: "introduction";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"layout/flex.mdx": {
	id: "layout/flex.mdx";
  slug: "layout/flex";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"layout/grid.mdx": {
	id: "layout/grid.mdx";
  slug: "layout/grid";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = never;
}
