import unittest
from app import app

class TestApp(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()

    def test_analyze_nutrition(self):
        data = {'meal': 'Example meal'}
        response = self.app.post('/analyze', json=data)
        self.assertEqual(response.status_code, 200)
        # Add more assertions to test the expected response

if __name__ == '__main__':
    unittest.main()
