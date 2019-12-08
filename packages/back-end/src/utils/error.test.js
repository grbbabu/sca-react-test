const errorHandler = require('./error');

describe('Error', () => {
    const statusFnMock = jest.fn();
    const jsonFnMock = jest.fn();
    const response = {
        status: statusFnMock,
        json: jsonFnMock
    };
    afterEach(() => {
        statusFnMock.mockClear();
        jsonFnMock.mockClear();
    });
    it('should return 404 for error code ENOTFOUND', () => {
        const err = {
            code: 'ENOTFOUND',
            isAxiosError: true
        };
        errorHandler(err, response);
        expect(statusFnMock).toHaveBeenCalledWith(404);
        expect(jsonFnMock).toHaveBeenCalledWith({ error: 'Not Found' });
    });

    it('should return status and statusText for axios errors', () => {
        const err = {
            isAxiosError: true,
            response: {
                status: 400,
                statusText: 'Bad Request'
            }
        };
        errorHandler(err, response);
        expect(statusFnMock).toHaveBeenCalledWith(400);
        expect(jsonFnMock).toHaveBeenCalledWith({ error: 'Bad Request' });
    });

    it('should return 500 Internal Server Error for other errors', () => {
        const err = {};
        errorHandler(err, response);
        expect(statusFnMock).toHaveBeenCalledWith(500);
        expect(jsonFnMock).toHaveBeenCalledWith({
            error: 'Internal Server Error'
        });
    });
});
