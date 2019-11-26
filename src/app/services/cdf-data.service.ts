import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Sigact } from '../models/sigact.model';

@Injectable({
  providedIn: 'root'
})
export class CdfDataService {
  private sigacts: Sigact[] = [];
  private sigactsUpdated = new Subject<Sigact[]>();

  constructor(private http: HttpClient, private router: Router) { }

  getCdfData() {
    this.http.get<any>(
      '/app-proxy/_webtas_data_service_v1/cdf/data/NGIC/queryspec/OperationsSIGACTPublishedReport?$rows=100'
      )
      .pipe(map((res) => {
        return res.data.map(sigact => {
          return {
            complexAttack: sigact.ComplexAttack,
            classificationReleasabilityMarkAlias: sigact.ClassificationReleasabilityMarkAlias,
            vehicleNearestECMToVehicleStruck: sigact.VehicleNearestECMToVehicleStruck,
            reportKey: sigact.ReportKey,
            primaryEventType: sigact.PrimaryEventType,
            enemyKIA: sigact.EnemyKIA,
            counterAttack: sigact.CounterAttack,
            mgrsText: sigact.MGRSText,
            classification: sigact.Classification,
            friendlyKIA: sigact.FriendlyKIA,
            summaryClassificationReleasabilityMark: sigact.SummaryClassificationReleasabilityMark,
            involvedCLC: sigact.InvolvedCLC,
            situationID: sigact.SituationID,
            classificationReleasabilityMark: sigact.ClassificationReleasabilityMark,
            tearLineSourceReportKey: sigact.TearLineSourceReportKey,
            enemyDetained: sigact.EnemyDetained,
            dateOccurred: sigact.DateOccurred,
            unitName: sigact.UnitName,
            longitude: sigact.Longitude,
            datePostedZulu: sigact.DatePostedZulu,
            country: sigact.Country,
            vehicleSummary: sigact.VehicleSummary,
            originatorGroup: sigact.OriginatorGroup,
            coordinatedAttack: sigact.CoordinatedAttack,
            summaryClassification: sigact.SummaryClassification,
            cfciWia: sigact.CFCIVWIA,
            originatingNation: sigact.OriginatingNation,
            originatingSystem: sigact.OriginatingSystem,
            vehicleDistanceBetween: sigact.VehicleDistanceBetween,
            dateInitialPublishedZulu: sigact.DateInitialPublishedZulu,
            unitActivity: sigact.UnitActivity,
            intendedEffect: sigact.IntendedEffect,
            msc: sigact.MSC,
            dateOccurredZulu: sigact.DateOccurredZulu,
            updatedByName: sigact.UpdatedByName,
            classificationDomain: sigact.ClassificationDomain,
            vehicleConvoyCount: sigact.VehicleConvoyCount,
            updatedByUnit: sigact.UpdatedByUnit,
            hostNationAbd: sigact.HostNationABD,
            medevacRequested: sigact.MedevacRequested,
            cfciKia: sigact.CFCIVKIA,
            isClosed: sigact.isClosed,
            vehicleConvoySpeedMeasure: sigact.VehicleConvoySpeedMeasure,
            classificationCodeWord: sigact.ClassificationCodeWord,
            enemyWia: sigact.EnemyWIA,
            civilianAbd: sigact.CivilianABD,
            classificationAlias: sigact.ClassificationAlias,
            friendlyAbd: sigact.FriendlyABD,
            coordsUnknown: sigact.CoordsUnknown,
            precedence: sigact.Precedence,
            updatedByGroup: sigact.UpdatedByGroup,
            vehicleConvoySpeed: sigact.VehicleConvoySpeed,
            tipReportedBy: sigact.TipReportedBy,
            tearLineSourceReportDateUpdated: sigact.TearLineSourceReportDateUpdated,
            latitude: sigact.Latitude,
            dateUpdatedZulu: sigact.DateUpdatedZulu,
            datePosted: sigact.DatePosted,
            originatingNetwork: sigact.OriginatingNetwork,
            civilianWia: sigact.CivilianWIA,
            civilianKia: sigact.CivilianKIA,
            fob: sigact.FOB,
            route: sigact.Route,
            dateUpdated: sigact.DateUpdated,
            tearLineClassification: sigact.TearLineClassification,
            typeOfUnit: sigact.TypeOfUnit,
            city: sigact.City,
            classificationDeclassifyOn: sigact.ClassificationDeclassifyOn,
            province: sigact.Province,
            primaryEventCategory: sigact.PrimaryEventCategory,
            isTearLine: sigact.IsTearLine,
            region: sigact.Region,
            classificationCaveat: sigact.ClassificationCaveat,
            trackingNumber: sigact.TrackingNumber,
            originatingSite: sigact.OriginatingSite,
            hostNationKia: sigact.HostNationKIA,
            theaterFilter: sigact.TheaterFilter,
            cfciAbd: sigact.CFCIVABD,
            gmtDelta: sigact.GMTDelta,
            estimatedMgrs: sigact.EstimatedMGRS,
            inVicinityOf: sigact.InVicinityOf,
            estimatedDtg: sigact.EstimatedDTG,
            vehicleNearestEcmToIed: sigact.VehicleNearestECMToIED,
            tearLineContact: sigact.TearLineContact,
            reportingUnit: sigact.ReportingUnit,
            dateInitialPublished: sigact.DateInitialPublished,
            friendlyWia: sigact.FriendlyWIA,
            title: sigact.Title,
            originatorName: sigact.OriginatorName,
            originatorUnit: sigact.OriginatorUnit,
            spotClassification: sigact.SpotClassification,
            tearLineReleasability: sigact.TearLineReleasability,
            reportSource: sigact.ReportSource,
            cityZone: sigact.CityZone,
            summary: sigact.Summary,
            vehicleOtherCounterMeasures: sigact.VehicleOtherCounterMeasures,
            spotClassificationReleasabilityMark: sigact.SpotClassificationReleasabilityMark,
            timeUnknown: sigact.TimeUnknown,
            hostNationWia: sigact.HostNationWIA,
          };
        });
      }))
    .subscribe(fetchedCdfData => {
      this.sigacts = fetchedCdfData;
      this.sigactsUpdated.next([...this.sigacts]);
    });
  }

  getCdfDataUpdatedListener() {
    return this.sigactsUpdated.asObservable();
  }
}

