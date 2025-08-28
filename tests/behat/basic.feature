@availability @availability_mfa
Feature: Basic tests for MFA

  @javascript
  Scenario: Plugin availability_mfa appears in the list of installed additional plugins
    Given I log in as "admin"
    When I navigate to "Plugins > Plugins overview" in site administration
    And I follow "Additional plugins"
    Then I should see "MFA"
    And I should see "availability_mfa"
