'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">behavioral-enrichment-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-32e08121de9ebbca4944fa6e3d2ebeae"' : 'data-target="#xs-components-links-module-AppModule-32e08121de9ebbca4944fa6e3d2ebeae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-32e08121de9ebbca4944fa6e3d2ebeae"' :
                                            'id="xs-components-links-module-AppModule-32e08121de9ebbca4944fa6e3d2ebeae"' }>
                                            <li class="link">
                                                <a href="components/AboutDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditUserInfoDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditUserInfoDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IncidentReportComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IncidentReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IncidentReportStatusComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IncidentReportStatusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InsertNewAnimalDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InsertNewAnimalDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InsertNewItemDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InsertNewItemDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MasterApprovedComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MasterApprovedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RequestFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestFormStatusComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RequestFormStatusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserAccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserAccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-32e08121de9ebbca4944fa6e3d2ebeae"' : 'data-target="#xs-injectables-links-module-AppModule-32e08121de9ebbca4944fa6e3d2ebeae"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-32e08121de9ebbca4944fa6e3d2ebeae"' :
                                        'id="xs-injectables-links-module-AppModule-32e08121de9ebbca4944fa6e3d2ebeae"' }>
                                        <li class="link">
                                            <a href="injectables/Globals.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>Globals</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/PasswordErrorStateMatcher.html" data-type="entity-link">PasswordErrorStateMatcher</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrentUserService.html" data-type="entity-link">CurrentUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EnrichmentService.html" data-type="entity-link">EnrichmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Globals.html" data-type="entity-link">Globals</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IncidentService.html" data-type="entity-link">IncidentService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link">AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AnimalInfo.html" data-type="entity-link">AnimalInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApprovedEntry.html" data-type="entity-link">ApprovedEntry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryInfo.html" data-type="entity-link">CategoryInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CompleteRequestForm.html" data-type="entity-link">CompleteRequestForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DepartmentInfo.html" data-type="entity-link">DepartmentInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link">DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditUserInfo.html" data-type="entity-link">EditUserInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnrichmentForm.html" data-type="entity-link">EnrichmentForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImageInfo.html" data-type="entity-link">ImageInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IncidentInstance.html" data-type="entity-link">IncidentInstance</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IncidentReportForm.html" data-type="entity-link">IncidentReportForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemInfo.html" data-type="entity-link">ItemInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocationInfo.html" data-type="entity-link">LocationInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PartialUserInfo.html" data-type="entity-link">PartialUserInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SpeciesInfo.html" data-type="entity-link">SpeciesInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StandardReturnObject.html" data-type="entity-link">StandardReturnObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StandardReturnObject-1.html" data-type="entity-link">StandardReturnObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserInfo.html" data-type="entity-link">UserInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserListInfo.html" data-type="entity-link">UserListInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserPermissions.html" data-type="entity-link">UserPermissions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});