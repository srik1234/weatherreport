describe('testing the useCityWeatherFetch hook', () => {
    beforeAll(() => {
        jest.spyOn(global, 'fetch')
            .mockImplementation(() => Promise.resolve({
                json: () => Promise.resolve({
                    defaultValue: 'default value'
                })
            }))
        });
    afterEach(() => {
        global.fetch.mockClear();
    });
    afterAll(() => {
        global.fetch.mockRestore();
    });
});

it('should make the api call to fetch the default value and return data', async () => {
    const {
        result,
        waitForNextUpdate
    } = renderHook(() => useCityWeatherFetch());
    await waitForNextUpdate();
    expect(fetch).toHaveBeenCalled();
    expect(result.current[0]).toEqual('default value');
});