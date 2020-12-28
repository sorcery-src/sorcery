/**
 * @jest-environment node
 */
declare function sass(data: string): string

test("integration", () => {
	const result = sass(`
@use "src/sass/helpers/getters" as *;

.clsx {
	@each $each in weight-vars() {
		font-weight: $each;
	}
}
`)
	// prettier-ignore
	expect(result).toBe(`
.clsx {
	font-weight: var(--thin);
	font-weight: var(--extralight);
	font-weight: var(--light);
	font-weight: var(--bold-none);
	font-weight: var(--medium);
	font-weight: var(--semibold);
	font-weight: var(--bold);
	font-weight: var(--extrabold);
	font-weight: var(--black);
}
`.trim())
})